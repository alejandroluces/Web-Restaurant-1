import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Share2 } from 'lucide-react';
import { menuData } from '../../data/menu';

interface QRCodeGeneratorProps {
  menuUrl: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ menuUrl }) => {
  const { t } = useTranslation();
  const [qrValue, setQrValue] = useState(menuUrl);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Add language parameter to QR code URL
  useEffect(() => {
    const url = new URL(menuUrl);
    url.searchParams.set('view', 'mobile');
    setQrValue(url.toString());
  }, [menuUrl]);

  // Save menu data offline
  const handleSaveOffline = async () => {
    try {
      setSaveStatus('saving');
      
      // Create a menu data object with timestamp
      const menuStorage = {
        data: menuData,
        timestamp: new Date().toISOString(),
        version: '1.0'
      };

      // Use IndexedDB to store the menu data
      const request = indexedDB.open('MareNostrumDB', 1);
      
      request.onerror = () => {
        throw new Error('Failed to open database');
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('menu')) {
          db.createObjectStore('menu', { keyPath: 'id' });
        }
      };

      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const transaction = db.transaction(['menu'], 'readwrite');
        const store = transaction.objectStore('menu');
        
        const saveRequest = store.put({
          id: 'current',
          ...menuStorage
        });

        saveRequest.onsuccess = () => {
          setSaveStatus('saved');
          setTimeout(() => setSaveStatus('idle'), 2000);
        };

        saveRequest.onerror = () => {
          throw new Error('Failed to save menu data');
        };
      };
    } catch (error) {
      console.error('Error saving menu:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }
  };

  // Share QR code
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Mare Nostrum Restaurant Menu',
          text: 'Scan this QR code to view our menu',
          url: qrValue,
        });
      } else {
        await navigator.clipboard.writeText(qrValue);
        alert(t('menu.shareLinkCopied'));
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h3 className="text-xl font-heading font-semibold mb-3">{t('home.mobileMenu.title')}</h3>
      <p className="text-gray-600 mb-6">{t('home.mobileMenu.description')}</p>
      
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <QRCodeSVG 
            value={qrValue} 
            size={180} 
            level="H" 
            includeMargin={true}
            bgColor={"#FFFFFF"}
            fgColor={"#1A5276"}
          />
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={handleSaveOffline}
          disabled={saveStatus === 'saving' || saveStatus === 'saved'}
          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            saveStatus === 'saved' 
              ? 'bg-green-500 text-white'
              : saveStatus === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-primary-500 text-white hover:bg-primary-600'
          }`}
        >
          <Download size={18} className="mr-2" />
          {saveStatus === 'saving' && t('common.saving')}
          {saveStatus === 'saved' && t('common.saved')}
          {saveStatus === 'error' && t('common.error')}
          {saveStatus === 'idle' && t('home.mobileMenu.saveButton')}
        </button>
        
        <button 
          onClick={handleShare}
          className="flex items-center bg-accent-500 text-white px-4 py-2 rounded-md hover:bg-accent-600 transition-colors"
        >
          <Share2 size={18} className="mr-2" />
          {t('menu.dishDetails.share')}
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
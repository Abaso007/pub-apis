'use client';

import { useEffect, useState } from 'react';

import { EVENT_TYPE_LINK } from '@/lib/constants/events';
import { trackEvent } from '@/lib/utils/trackEvent';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<string | null>(null);

  useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));
  }, []);

  const handleClickSite = () => {
    trackEvent({
      eventName: 'Click sznm.dev',
      eventData: { type: EVENT_TYPE_LINK },
    });
  };

  return (
    <footer className="flex w-full justify-center self-end">
      <div className="text-center">
        <p className="text-sm sm:text-base">
          {currentYear}
          {' | '}
          <a
            href="https://sznm.dev"
            onClick={handleClickSite}
            className="font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            sznm.dev
          </a>
        </p>

        <p className="text-xs sm:text-sm">
          Powered by https://publicapis.dev/ API
        </p>
      </div>
    </footer>
  );
};

export default Footer;

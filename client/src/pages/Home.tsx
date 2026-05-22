import { useState } from 'react';
import Envelope from '@/components/Envelope';
import CountdownTimer from '@/components/CountdownTimer';
import HeroSection from '@/components/HeroSection';
import VenueSection from '@/components/VenueSection';
import StorySection from '@/components/StorySection';
import GallerySection from '@/components/GallerySection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [couplePhotoUrl] = useState<string | undefined>(
    '/manus-storage/ac7b3f41-e0db-4e00-a415-4d913332cd6b_0ad1decd.jpg'
  );

  return (
    <div className=\"min-h-screen bg-white\">
      {!envelopeOpened && (
        <Envelope onOpen={() => setEnvelopeOpened(true)} />
      )}

      {envelopeOpened && (
        <>
          <HeroSection couplePhotoUrl={couplePhotoUrl} />
          <CountdownTimer />
          <VenueSection />
          <StorySection />
          <GallerySection />
          <FooterSection />
        </>
      )}
    </div>
  );
}


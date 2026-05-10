/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MissionVision from './components/MissionVision';
import StatsCounter from './components/StatsCounter';
import MinistriesBento from './components/MinistriesBento';
import Leadership from './components/Leadership';
import LiveStream from './components/LiveStream';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import EventsCalendar from './components/EventsCalendar';
import PrayerRequest from './components/PrayerRequest';
import Donation from './components/Donation';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <HeroSection />
      <StatsCounter />
      <MissionVision />
      <MinistriesBento />
      <Leadership />
      <LiveStream />
      <Testimonials />
      <Gallery />
      <EventsCalendar />
      <PrayerRequest />
      <Donation />
      <ContactLocation />
      <Footer />
      <BackToTop />
    </div>
  );
}

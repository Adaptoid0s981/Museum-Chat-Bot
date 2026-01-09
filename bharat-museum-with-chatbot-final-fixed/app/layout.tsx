import './globals.css';
import MuseumChatbot from '@/components/MuseumChatbot';

export const metadata = {
  title: 'Bharat Museum',
  description: 'Explore the Bharat Museum',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
          <MuseumChatbot />
        </main>
      </body>
    </html>
  );
}

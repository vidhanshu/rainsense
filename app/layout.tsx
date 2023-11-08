import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import './globals.css';
import Navbar from '@/src/common/components/navbar';
import Footer from '@/src/common/components/footer';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Rainsense - Precise Rainfall Prediction and Water Resource Management',
    description:
        'Rainsense provides precise rainfall prediction and water resource management services to help you make informed decisions about water usage and conservation.',
    keywords:
        'rainfall prediction, water resource management, water conservation',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

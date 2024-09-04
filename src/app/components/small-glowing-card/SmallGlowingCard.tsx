import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface SmallGlowingCardProps {
  title: string;
  description: string;
  linkUrl: string;
  imageUrl: string;
  imageAlt: string;
  gradientColors: string;
}

const SmallGlowingCard: React.FC<SmallGlowingCardProps> = ({
  title,
  description,
  linkUrl,
  imageUrl,
  imageAlt,
  gradientColors,
}) => {
  return (
    <div className={`relative overflow-hidden rounded-lg p-4 mb-4 sm:block md:hidden ${gradientColors}`}>
      <div className="absolute inset-0 bg-gradient-to-r animate-gradient-x" style={{ backgroundSize: '200% 200%' }}></div>
      <div className="relative z-10 flex">
        <div className="flex-1 pr-4">
          <h1 className="text-lg font-semibold text-white mb-2">{title}</h1>
          <p className="text-sm text-gray-200 mb-4">{description}</p>
          <a
            href={linkUrl}
            className="inline-flex items-center text-white hover:underline"
          >
            Read more
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
        <div className="w-1/3 flex-shrink-0">
          <Image
            src={imageUrl}
            width={100}
            height={100}
            alt={imageAlt}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallGlowingCard;
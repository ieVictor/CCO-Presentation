'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface Video {
  title: string;
  url: string;
}

interface VideoListProps {
  videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
  const [watchedVideos, setWatchedVideos] = useState<Set<number>>(new Set());

  const toggleWatched = (index: number) => {
    setWatchedVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <ul className="space-y-2">
      {videos.map((video, index) => (
        <li
          key={index}
          className="flex items-center justify-between bg-secondary p-3 rounded-md"
        >
          <span
            className={`text-secondary-foreground ${
              watchedVideos.has(index) ? 'line-through' : ''
            }`}
          >
            {video.title}
          </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleWatched(index)}
              className={
                watchedVideos.has(index) ? 'text-green-500' : 'text-gray-400'
              }
            >
              <CheckCircle className="h-5 w-5" />
              <span className="sr-only">Marcar como assistido</span>
            </Button>
            <Button asChild variant="outline">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                Assistir
              </a>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

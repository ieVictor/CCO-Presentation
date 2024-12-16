import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Youtube } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  videoUrl: string;
  materialUrl: string;
}

export default function ModuleCard({
  title,
  description,
  materialUrl,
  videoUrl,
}: ModuleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1">
          <Button asChild>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              <Youtube size={16} />
              Acessar playlist
            </a>
          </Button>
          <Button asChild>
            <a href={materialUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              Acessar código fonte das aulas
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

import { Button } from './ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';

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
              Acessar playlist
            </a>
          </Button>
          <Button asChild>
            <a href={materialUrl} target="_blank" rel="noopener noreferrer">
              Materiais
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

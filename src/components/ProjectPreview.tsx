import HomeImage from '../assets/HomeImage.png';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export default function ProjectPreview() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Projeto Final - Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[1440/1024] w-full overflow-hidden rounded-lg">
          <Image
            src={HomeImage}
            alt="Preview do projeto final - Website de jogos com tema roxo escuro, incluindo seção hero com controle 3D, seção de jogos em tendência e mais"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>Este é o projeto final que você irá desenvolver, que inclui:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Header</li>
            <li>Seção hero com ilustração 3D de controle</li>
            <li>Integração com logos de plataformas de jogos</li>
            <li>Seção de jogos em tendência</li>
            <li>Layout responsivo e moderno</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

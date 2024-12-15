import { Github } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import teamMembers from '../models/teamMembers';

export default function TeamMembers() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Desenvolvedores do Projeto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <Card key={member.name}>
            <CardHeader>
              <CardTitle className="text-lg">{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {member.role}
              </p>
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                <Github className="w-4 h-4 mr-1" />
                GitHub Profile
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

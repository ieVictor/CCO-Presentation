import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import ModuleCard from 'src/components/ModuleCard';
import ProjectPreview from 'src/components/ProjectPreview';
import TeamMembers from 'src/components/TeamMembers';
import VideoList from 'src/components/VideoList';
import modules from 'src/models/modules';
import {
  htmlVideos,
  cssVideos,
  javascriptVideos,
  projectVideos,
} from 'src/models/projectVideos';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <TeamMembers />
        <ProjectPreview />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>

        <h2 id="html-video" className="text-2xl font-bold mb-4">
          Aulas de HTML
        </h2>
        <VideoList videos={htmlVideos} />

        <h2 id="css-video" className="text-2xl font-bold mb-4 mt-4">
          Aulas de CSS
        </h2>
        <VideoList videos={cssVideos} />

        <h2 id="javascript-video" className="text-2xl font-bold mb-4 mt-4">
          Aulas de Javascript
        </h2>
        <VideoList videos={javascriptVideos} />

        <h2 id="projeto-final-video" className="text-2xl font-bold mb-4 mt-4">
          Aulas do Projeto Final
        </h2>
        <VideoList videos={projectVideos} />
      </main>
      <Footer />
    </div>
  );
}

import type { CaseStudyYoutubeVideo } from "../../lib/projects";

type CaseStudyVideoProps = {
  video: CaseStudyYoutubeVideo;
};

function CaseStudyVideo({ video }: CaseStudyVideoProps) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
    video.videoId,
  )}`;

  return (
    <figure className="flex flex-col gap-3">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-portfolio-green/30 bg-portfolio-panel">
        <iframe
          src={embedUrl}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {video.caption ? (
        <figcaption className="font-mono text-xs leading-relaxed text-portfolio-mist/60 sm:text-sm">
          {video.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

type CaseStudyVideoGridProps = {
  videos: CaseStudyYoutubeVideo[];
};

export function CaseStudyVideoGrid({ videos }: CaseStudyVideoGridProps) {
  if (videos.length === 0) {
    return null;
  }

  if (videos.length === 1) {
    return <CaseStudyVideo video={videos[0]} />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
      {videos.map((video) => (
        <CaseStudyVideo key={`${video.videoId}-${video.title}`} video={video} />
      ))}
    </div>
  );
}

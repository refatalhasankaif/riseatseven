import AnnouncementBar from "@/components/section/AnnouncementBar";

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans">
      <main className="flex w-full flex-col">
        <AnnouncementBar />
      </main>
    </div>
  );
}

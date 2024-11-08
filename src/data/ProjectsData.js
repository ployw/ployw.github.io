import AuralysImg from "../assets/Auralys.png"
import PongImg from "../assets/Pong.png"
import NotesPalImg from "../assets/NotesPal.png"
import DoorbellIMG from "../assets/Doorbell.png"

export const Projects = [{
    title: "🛎️ Doorbell Bot",
    img: DoorbellIMG,
    description: "A smart doorbell system that sends a notification to your Discord when someone rings and displays your response in LED indicators.",
    items: ["Python", "Raspberry Pi 3 Model B"]
},
{
    title: "🎾 Pickle.io",
    description: "An application for local pickleball players to easily track teams and matches for MLP-format leagues.",
    img: "",
    items: ["React", "TypeScript", "Supabase"]
},
{
    title: "🗒️ NotesPal",
    description: "Inspired by The Unsent Project, this platform allows users to share heartfelt messages, either anonymously or not, on a public message board.",
    img: NotesPalImg,
    items: ["React", "Node.js", "MySQL"]
},
{
    title: "🔊 Auralys",
    description: "A web application that generates and saves Spotify playlists for users based on their prompts.",
    img: AuralysImg,
    items: ["Next.js", "Flask"]
},
{
    title: "🏓 Ping Pong",
    description: "A Ping pong game! Try to score against a bot.",
    img: PongImg,
    items: ["C++", "Raylib"]
},
];


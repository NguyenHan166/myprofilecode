import type { LucideIcon } from "lucide-react";
import { Heart, Target, User, Zap } from "lucide-react";

export type Language = "en" | "vi";

export const languageLabels: Record<Language, string> = {
    en: "EN",
    vi: "VI",
};

export const content = {
    en: {
        header: {
            logo: "Home",
            navLinks: [
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#education", label: "Education" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
            ],
            languageToggleLabel: "Switch language",
        },
        hero: {
            intro: "Hello, I'm",
            name: "Hân",
            highlightedName: "Nguyễn",
            role: "Full Stack Developer",
            description:
                "Back-end engineer focused on building scalable services and APIs. I also craft accessible, pixel-perfect interfaces so I can ship end-to-end experiences with both solid engineering and thoughtful UX.",
            contactCta: "Contact Me",
            imageAlt: "Profile",
        },
        about: {
            eyebrow: "About Me",
            title:
                "Back-end Engineer building reliable systems with a front-end eye for UX and accessibility.",
            paragraphs: [
                "I'm a software engineer focused primarily on back-end development, building scalable, reliable services and APIs with a strong emphasis on performance, security, and maintainability. I enjoy designing clean architectures, data models, and integrations that help products ship faster and run smoother.",
                "Alongside back-end work, I bring a front-end sensibility: accessibility, responsive UI, and pixel-level polish, so the systems I build do not just work well, they feel great to use.",
                "Outside of work, I explore new technologies, contribute to open source, and spend time outdoors with friends and family.",
            ],
            visionTitle: "My Vision",
            vision:
                "Become a back-end specialist who builds high-impact products, bringing engineering rigor and user-centered thinking together.",
            strengthsTitle: "My Strengths",
            strengths: [
                {
                    icon: Zap,
                    title: "Problem Solver",
                    description:
                        "I love tackling complex challenges and finding elegant solutions.",
                },
                {
                    icon: Heart,
                    title: "Passionate",
                    description:
                        "Deeply committed to creating meaningful digital experiences.",
                },
                {
                    icon: Target,
                    title: "Goal-Oriented",
                    description:
                        "Focused on delivering results that exceed expectations.",
                },
                {
                    icon: User,
                    title: "Team Player",
                    description:
                        "Collaborative mindset with excellent communication skills.",
                },
            ] satisfies Array<Strength>,
        },
        education: {
            eyebrow: "Education",
            title: "My Academic Journey",
            items: [
                {
                    school: "Posts and Telecommunications Institute of Technology",
                    degree: "Information Technology Engineer",
                    year: "2021 - 2026",
                    description:
                        "Dean's List, GPA 3.9/4.0. Focus on web technologies and algorithms.",
                },
                {
                    school: "Trường Trung Học Phổ Thông A Hải Hậu",
                    degree: "High School Program",
                    year: "2018 - 2021",
                    description:
                        "Completed the high school program with excellent grades.",
                },
            ],
        },
        experience: {
            eyebrow: "Experience",
            title: "My Professional Journey",
            items: [
                {
                    company: "Công ty TNHH Tạ Thanh An Group",
                    role: "Fullstack Engineer",
                    period: "05/2025 - now",
                    description:
                        "Participate in developing and publishing anti-phishing tools with more than 10,000 users. Participate in CRM development for companies and commercial versions.",
                    skills: ["React", "TypeScript", "NodeJS", "GraphQL"],
                    link: "https://uytinmang.vn",
                },
                {
                    company: "FPT Software",
                    role: "Full Stack Developer",
                    period: "04/2024 - 07/2024",
                    description:
                        "Led backend development for intern-level applications.",
                    skills: ["Springboot", "Node.js", "PostgreSQL", "AWS"],
                    link: "https://startupxyz.example.com",
                },
            ],
        },
        skills: {
            eyebrow: "Skills",
            title: "What I'm Good At",
            technicalTitle: "Technical Skills",
            softTitle: "Soft Skills",
            coreTitle: "Core Competencies",
            softSkills: [
                "Problem Solving",
                "Communication",
                "Team Leadership",
                "Time Management",
                "Creativity",
                "Adaptability",
                "Critical Thinking",
                "Attention to Detail",
            ],
        },
        projects: {
            eyebrow: "Projects",
            title: "Featured Work",
            demoLabel: "Demo",
            codeLabel: "Code",
            items: [
                {
                    title: "Uy Tín Mạng",
                    description:
                        "A scammer checking platform helping users identify and avoid online scams effectively.",
                    image: "/uytinmang.png",
                    tags: ["Node.js", "React", "PostgreSQL"],
                    demo: "https://uytinmang.vn",
                    github: "https://uytinmang.vn",
                },
                {
                    title: "Web AI Photo Editor",
                    description:
                        "An AI-powered photo editing web application that allows users to enhance and transform images using advanced AI algorithms.",
                    image: "/webphoto.png",
                    tags: ["React", "Firebase", "Tailwind"],
                    demo: "https://web-ai-photo-production.up.railway.app",
                    github: "https://github.com/NguyenHan166/web-ai-photo",
                },
                {
                    title: "Personal Cloud Storage",
                    description:
                        "A customized personal cloud with Google Drive-like storage and utility tools such as QR generation, social network UID lookup, and cold penalty checking.",
                    image: "/image.png",
                    tags: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Tailwind"],
                    demo: "https://cloudhan.nguyenvanhan.io.vn",
                    github: "https://github.com/NguyenHan166/my-cloud",
                },
                {
                    title: "Health Care System",
                    description:
                        "A comprehensive health care management system for clinics and hospitals to streamline patient care and administrative tasks.",
                    image: "/ai-chatbot-interface-modern-dark-theme.jpg",
                    tags: ["React", "OpenAI", "Django"],
                    demo: "https://github.com/NguyenHan166/healthcare-django",
                    github: "https://github.com/NguyenHan166/healthcare-django",
                },
                {
                    title: "Portfolio Website",
                    description:
                        "A beautiful, responsive portfolio template for developers and designers.",
                    image: "/portfolio-website-template-dark-minimal.jpg",
                    tags: ["React", "Framer Motion", "Tailwind"],
                    demo: "https://profile.nguyenvanhan.io.vn",
                    github: "https://github.com/NguyenHan166/myprofilecode",
                },
                {
                    title: "Menu Banhmyvaxoi Ngọc",
                    description:
                        "A menu management system for Banhmyvaxoi Ngọc restaurant.",
                    image: "/menungoc.png",
                    tags: ["NextJs", "Google Sheet", "Tailwind"],
                    demo: "https://menu.banhmivaxoingoc.io.vn",
                    github: "https://github.com/NguyenHan166/menu-banhmyxoingoc",
                },
            ],
        },
        gallery: {
            eyebrow: "Gallery",
            title: "Moments & Memories",
            photos: [
                { src: "/profile.jpg", alt: "Outdoor portrait" },
                { src: "/profile2.jpg", alt: "Working in office" },
                { src: "/3.jpg", alt: "Speaking at conference" },
                { src: "/24.jpg", alt: "Team collaboration" },
                { src: "/5.jpg", alt: "Hiking adventure" },
                { src: "/6.jpg", alt: "Coffee shop moment" },
            ],
        },
        contact: {
            eyebrow: "Contact",
            title: "Get In Touch",
            description:
                "If you would like to discuss a project or just say hi, I'm always down to chat.",
            infoTitle: "Contact Information",
            followTitle: "Follow Me",
            labels: {
                email: "Email",
                phone: "Phone",
                location: "Location",
                name: "Name",
                message: "Message",
            },
            placeholders: {
                name: "Your name",
                email: "your@email.com",
                message: "Your message...",
            },
            sending: "Sending...",
            send: "Send Message",
            success: "Message sent successfully!",
        },
        footer: {
            logo: "JD",
            rights: "All rights reserved.",
            quickLinks: [
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
            ],
        },
    },
    vi: {
        header: {
            logo: "Trang chủ",
            navLinks: [
                { href: "#home", label: "Trang chủ" },
                { href: "#about", label: "Giới thiệu" },
                { href: "#education", label: "Học vấn" },
                { href: "#experience", label: "Kinh nghiệm" },
                { href: "#skills", label: "Kỹ năng" },
                { href: "#projects", label: "Dự án" },
                { href: "#gallery", label: "Thư viện" },
                { href: "#contact", label: "Liên hệ" },
            ],
            languageToggleLabel: "Đổi ngôn ngữ",
        },
        hero: {
            intro: "Xin chào, tôi là",
            name: "Hân",
            highlightedName: "Nguyễn",
            role: "Lập trình viên Full Stack",
            description:
                "Tôi là kỹ sư back-end tập trung xây dựng dịch vụ và API có khả năng mở rộng. Tôi cũng chăm chút giao diện dễ tiếp cận, chỉn chu từng chi tiết để có thể tạo ra trải nghiệm end-to-end vững về kỹ thuật và tốt về UX.",
            contactCta: "Liên hệ tôi",
            imageAlt: "Ảnh hồ sơ",
        },
        about: {
            eyebrow: "Giới thiệu",
            title:
                "Kỹ sư back-end xây dựng hệ thống ổn định, đồng thời quan tâm đến UX và khả năng tiếp cận ở front-end.",
            paragraphs: [
                "Tôi là kỹ sư phần mềm tập trung chủ yếu vào phát triển back-end, xây dựng các dịch vụ và API có khả năng mở rộng, ổn định, chú trọng hiệu năng, bảo mật và khả năng bảo trì. Tôi thích thiết kế kiến trúc rõ ràng, mô hình dữ liệu hợp lý và các tích hợp giúp sản phẩm ra mắt nhanh hơn, vận hành mượt hơn.",
                "Bên cạnh back-end, tôi cũng có tư duy front-end về khả năng tiếp cận, giao diện responsive và độ hoàn thiện ở từng chi tiết, để hệ thống không chỉ chạy tốt mà còn dễ chịu khi sử dụng.",
                "Ngoài công việc, tôi tìm hiểu công nghệ mới, đóng góp cho mã nguồn mở và dành thời gian ngoài trời cùng bạn bè, gia đình.",
            ],
            visionTitle: "Định hướng",
            vision:
                "Trở thành chuyên gia back-end xây dựng các sản phẩm có tác động cao, kết hợp tư duy kỹ thuật chặt chẽ với góc nhìn lấy người dùng làm trung tâm.",
            strengthsTitle: "Thế mạnh",
            strengths: [
                {
                    icon: Zap,
                    title: "Giải quyết vấn đề",
                    description:
                        "Tôi thích xử lý các bài toán phức tạp và tìm ra giải pháp gọn gàng, hiệu quả.",
                },
                {
                    icon: Heart,
                    title: "Nhiệt huyết",
                    description:
                        "Luôn nghiêm túc với việc tạo ra những trải nghiệm số có ý nghĩa.",
                },
                {
                    icon: Target,
                    title: "Hướng mục tiêu",
                    description:
                        "Tập trung tạo ra kết quả rõ ràng và vượt kỳ vọng.",
                },
                {
                    icon: User,
                    title: "Làm việc nhóm",
                    description:
                        "Có tư duy cộng tác và kỹ năng giao tiếp tốt trong quá trình làm việc.",
                },
            ] satisfies Array<Strength>,
        },
        education: {
            eyebrow: "Học vấn",
            title: "Hành trình học tập",
            items: [
                {
                    school: "Học viện Công nghệ Bưu chính Viễn thông",
                    degree: "Kỹ sư Công nghệ Thông tin",
                    year: "2021 - 2026",
                    description:
                        "Danh sách sinh viên xuất sắc, GPA 3.9/4.0. Tập trung vào công nghệ web và thuật toán.",
                },
                {
                    school: "Trường Trung Học Phổ Thông A Hải Hậu",
                    degree: "Chương trình THPT",
                    year: "2018 - 2021",
                    description:
                        "Hoàn thành chương trình trung học phổ thông với thành tích tốt.",
                },
            ],
        },
        experience: {
            eyebrow: "Kinh nghiệm",
            title: "Hành trình nghề nghiệp",
            items: [
                {
                    company: "Công ty TNHH Tạ Thanh An Group",
                    role: "Kỹ sư Fullstack",
                    period: "05/2025 - nay",
                    description:
                        "Tham gia phát triển và phát hành các công cụ chống lừa đảo với hơn 10.000 người dùng. Tham gia phát triển CRM cho doanh nghiệp và các phiên bản thương mại.",
                    skills: ["React", "TypeScript", "NodeJS", "GraphQL"],
                    link: "https://uytinmang.vn",
                },
                {
                    company: "FPT Software",
                    role: "Lập trình viên Full Stack",
                    period: "04/2024 - 07/2024",
                    description:
                        "Phụ trách phát triển backend cho các ứng dụng ở cấp độ thực tập.",
                    skills: ["Springboot", "Node.js", "PostgreSQL", "AWS"],
                    link: "https://startupxyz.example.com",
                },
            ],
        },
        skills: {
            eyebrow: "Kỹ năng",
            title: "Những điểm tôi làm tốt",
            technicalTitle: "Kỹ năng kỹ thuật",
            softTitle: "Kỹ năng mềm",
            coreTitle: "Năng lực cốt lõi",
            softSkills: [
                "Giải quyết vấn đề",
                "Giao tiếp",
                "Dẫn dắt nhóm",
                "Quản lý thời gian",
                "Sáng tạo",
                "Thích nghi",
                "Tư duy phản biện",
                "Chú ý chi tiết",
            ],
        },
        projects: {
            eyebrow: "Dự án",
            title: "Sản phẩm nổi bật",
            demoLabel: "Demo",
            codeLabel: "Mã nguồn",
            items: [
                {
                    title: "Uy Tín Mạng",
                    description:
                        "Nền tảng kiểm tra thông tin lừa đảo, giúp người dùng nhận diện và tránh các rủi ro trực tuyến hiệu quả.",
                    image: "/uytinmang.png",
                    tags: ["Node.js", "React", "PostgreSQL"],
                    demo: "https://uytinmang.vn",
                    github: "https://uytinmang.vn",
                },
                {
                    title: "Web AI Photo Editor",
                    description:
                        "Ứng dụng chỉnh sửa ảnh bằng AI, cho phép người dùng nâng cấp và biến đổi hình ảnh bằng các thuật toán AI.",
                    image: "/webphoto.png",
                    tags: ["React", "Firebase", "Tailwind"],
                    demo: "https://web-ai-photo-production.up.railway.app",
                    github: "https://github.com/NguyenHan166/web-ai-photo",
                },
                {
                    title: "Personal Cloud Storage",
                    description:
                        "Hệ thống cloud cá nhân với chức năng tương tự Google Drive, kèm các công cụ như tạo QR, lấy UID mạng xã hội và kiểm tra phạt nguội.",
                    image: "/image.png",
                    tags: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Tailwind"],
                    demo: "https://cloudhan.nguyenvanhan.io.vn",
                    github: "https://github.com/NguyenHan166/my-cloud",
                },
                {
                    title: "Health Care System",
                    description:
                        "Hệ thống quản lý chăm sóc sức khỏe cho phòng khám và bệnh viện, hỗ trợ tối ưu chăm sóc bệnh nhân và công việc hành chính.",
                    image: "/ai-chatbot-interface-modern-dark-theme.jpg",
                    tags: ["React", "OpenAI", "Django"],
                    demo: "https://github.com/NguyenHan166/healthcare-django",
                    github: "https://github.com/NguyenHan166/healthcare-django",
                },
                {
                    title: "Portfolio Website",
                    description:
                        "Website portfolio responsive, đẹp và tối giản dành cho lập trình viên và designer.",
                    image: "/portfolio-website-template-dark-minimal.jpg",
                    tags: ["React", "Framer Motion", "Tailwind"],
                    demo: "https://profile.nguyenvanhan.io.vn",
                    github: "https://github.com/NguyenHan166/myprofilecode",
                },
                {
                    title: "Menu Banhmyvaxoi Ngọc",
                    description:
                        "Hệ thống quản lý menu cho quán Banhmyvaxoi Ngọc.",
                    image: "/menungoc.png",
                    tags: ["NextJs", "Google Sheet", "Tailwind"],
                    demo: "https://menu.banhmivaxoingoc.io.vn",
                    github: "https://github.com/NguyenHan166/menu-banhmyxoingoc",
                },
            ],
        },
        gallery: {
            eyebrow: "Thư viện",
            title: "Khoảnh khắc & kỷ niệm",
            photos: [
                { src: "/profile.jpg", alt: "Ảnh chân dung ngoài trời" },
                { src: "/profile2.jpg", alt: "Làm việc tại văn phòng" },
                { src: "/3.jpg", alt: "Chia sẻ tại sự kiện" },
                { src: "/24.jpg", alt: "Làm việc cùng đội nhóm" },
                { src: "/5.jpg", alt: "Chuyến đi ngoài trời" },
                { src: "/6.jpg", alt: "Khoảnh khắc ở quán cà phê" },
            ],
        },
        contact: {
            eyebrow: "Liên hệ",
            title: "Kết nối với tôi",
            description:
                "Nếu bạn muốn trao đổi về một dự án hoặc đơn giản là chào hỏi, tôi luôn sẵn sàng trò chuyện.",
            infoTitle: "Thông tin liên hệ",
            followTitle: "Theo dõi tôi",
            labels: {
                email: "Email",
                phone: "Điện thoại",
                location: "Địa điểm",
                name: "Họ tên",
                message: "Tin nhắn",
            },
            placeholders: {
                name: "Tên của bạn",
                email: "email@cuaban.com",
                message: "Nội dung tin nhắn...",
            },
            sending: "Đang gửi...",
            send: "Gửi tin nhắn",
            success: "Tin nhắn đã được gửi thành công!",
        },
        footer: {
            logo: "NH",
            rights: "Đã đăng ký bản quyền.",
            quickLinks: [
                { href: "#home", label: "Trang chủ" },
                { href: "#about", label: "Giới thiệu" },
                { href: "#projects", label: "Dự án" },
                { href: "#contact", label: "Liên hệ" },
            ],
        },
    },
} as const;

type Strength = {
    icon: LucideIcon;
    title: string;
    description: string;
};

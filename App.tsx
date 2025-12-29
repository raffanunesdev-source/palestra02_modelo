
import React, { useState } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  Play, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Target, 
  ArrowRight,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

// Sections
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-white">
              JOÃO<span className="text-orange-500">MARTINS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#temas" className="text-zinc-400 hover:text-white transition">Temas</a>
            <a href="#sobre" className="text-zinc-400 hover:text-white transition">Sobre</a>
            <a href="#depoimentos" className="text-zinc-400 hover:text-white transition">Resultados</a>
            <a href="#contato" className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-6 rounded-full transition-transform active:scale-95">
              Solicitar Proposta
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 p-4 space-y-4">
          <a href="#temas" onClick={() => setIsOpen(false)} className="block text-lg text-zinc-300">Temas</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="block text-lg text-zinc-300">Sobre</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)} className="block text-lg text-zinc-300">Resultados</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="block w-full text-center bg-orange-500 text-black font-bold py-3 rounded-xl">Solicitar Proposta</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
       <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full blur-[120px]"></div>
       <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-zinc-800 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
      <div className="flex-1 text-center md:text-left reveal">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Sua equipe de vendas está vendendo <span className="text-orange-500">abaixo do potencial?</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl reveal delay-1">
          Chegou a hora de mudar esse jogo. Palestras corporativas que transformam times comerciais em equipes de alta performance, foco em resultado e execução real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start reveal delay-2">
          <a href="#contato" className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            👉 Solicitar Proposta <ChevronRight size={20} />
          </a>
          <a href="#video" className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all flex items-center justify-center gap-2">
            Ver Vídeo <Play size={18} />
          </a>
        </div>
      </div>
      <div className="flex-1 relative reveal delay-1">
        <div className="relative w-full aspect-square md:aspect-[3/4] max-w-lg mx-auto overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
            alt="João Martins Palestrante" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-zinc-950 to-transparent">
             <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-1">Especialista em Vendas</p>
             <h3 className="text-2xl font-bold">João Martins</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LectureThemes = () => {
  const themes = [
    {
      id: 1,
      title: "Vendas Consultivas na Prática",
      description: "Como vender mais entendendo o cliente, não empurrando produto.",
      icon: <Target className="text-orange-500" size={32} />
    },
    {
      id: 2,
      title: "Alta Performance Comercial",
      description: "Disciplina, mentalidade e processo para bater metas de forma consistente.",
      icon: <TrendingUp className="text-orange-500" size={32} />
    },
    {
      id: 3,
      title: "Liderança Comercial Moderna",
      description: "Como líderes criam times que performam sem microgestão.",
      icon: <Users className="text-orange-500" size={32} />
    },
    {
      id: 4,
      title: "Vendedor com Repertório",
      description: "Comunicação, confiança e autoridade no processo de vendas.",
      icon: <Briefcase className="text-orange-500" size={32} />
    }
  ];

  return (
    <section id="temas" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Temas das Palestras</h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, idx) => (
            <div key={theme.id} className={`bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/50 transition-all group flex flex-col justify-between reveal`} style={{animationDelay: `${idx * 0.1}s`}}>
              <div>
                <div className="mb-6 bg-zinc-800 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-orange-500/10 transition-colors">
                  {theme.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{theme.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8">{theme.description}</p>
              </div>
              <button className="flex items-center gap-2 text-orange-500 font-bold group-hover:gap-4 transition-all">
                👉 Quero essa palestra <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients = () => (
  <section className="py-12 bg-orange-500 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-black font-black uppercase tracking-widest text-center mb-8 opacity-80 reveal">
        Empresas que confiaram na transformação dos seus times
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-90 contrast-125 reveal delay-1">
        <span className="text-2xl md:text-3xl font-bold text-zinc-900 italic">LOGOTECH</span>
        <span className="text-2xl md:text-3xl font-bold text-zinc-900 italic">GLOBALBANK</span>
        <span className="text-2xl md:text-3xl font-bold text-zinc-900 italic">MASTERCORP</span>
        <span className="text-2xl md:text-3xl font-bold text-zinc-900 italic">INOVA+</span>
        <span className="text-2xl md:text-3xl font-bold text-zinc-900 italic">ZENITH</span>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 order-2 lg:order-1 reveal">
        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
          O que sua equipe <span className="text-orange-500">vai conquistar</span>
        </h2>
        <ul className="space-y-6 mb-10">
          {[
            "Mais foco em resultado prático",
            "Processos claros de vendas e funil",
            "Aumento real na taxa de conversão",
            "Time mais confiante e engajado",
            "Liderança mais estratégica e menos reativa"
          ].map((item, idx) => (
            <li key={idx} className={`flex items-center gap-4 text-lg text-zinc-300 reveal`} style={{animationDelay: `${idx * 0.1}s`}}>
              <CheckCircle2 className="text-orange-500 shrink-0" size={28} />
              {item}
            </li>
          ))}
        </ul>
        <a href="#contato" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-extrabold py-5 px-10 rounded-full text-xl transition-all shadow-xl shadow-orange-500/10 active:scale-95">
          👉 Quero transformar meu time <ChevronRight size={24} />
        </a>
      </div>
      <div className="flex-1 order-1 lg:order-2 reveal delay-2">
         <div className="relative p-2 bg-zinc-800/50 rounded-3xl border border-zinc-800 group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Gráfico de crescimento" 
              className="rounded-2xl opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-orange-500/30 p-6 rounded-2xl shadow-2xl">
               <div className="flex items-center gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-full">
                    <TrendingUp className="text-orange-500" size={32} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Crescimento Médio</p>
                    <p className="text-2xl font-black text-white">+32% em 6 meses</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
);

const VideoSection = () => (
  <section id="video" className="py-24 bg-zinc-900/30">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
      <h2 className="text-3xl md:text-4xl font-black mb-4">Assista em Ação</h2>
      <p className="text-zinc-400 text-xl mb-12">Assista a um trecho da palestra que já impactou centenas de equipes comerciais em todo o Brasil.</p>
      <div className="relative group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1475721027785-f74dea327912?q=80&w=2070&auto=format&fit=crop" 
          className="w-full aspect-video object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" 
          alt="Palestra Thumbnail"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-20 h-20 md:w-28 md:h-28 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/40 group-hover:scale-110 transition-all">
              <Play className="text-black fill-current ml-2" size={40} />
           </div>
        </div>
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section className="py-24 bg-zinc-950 border-y border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          "Seu time vende muito, mas bate pouca meta?",
          "Falta disciplina no processo comercial?",
          "Os vendedores dependem demais de preço?",
          "A liderança está apagando incêndios o tempo todo?"
        ].map((pain, idx) => (
          <div key={idx} className="p-8 bg-zinc-900 border-l-4 border-orange-500 rounded-r-2xl reveal" style={{animationDelay: `${idx * 0.15}s`}}>
            <h4 className="text-xl font-bold italic text-zinc-200">"{pain}"</h4>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center reveal delay-2">
         <a href="#contato" className="inline-block bg-white text-black font-black py-4 px-12 rounded-full text-lg hover:bg-orange-500 transition-colors uppercase tracking-tight">
           👉 Resolver esses problemas agora
         </a>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ricardo Mendes",
      role: "Diretor Comercial",
      company: "TechNexus S.A.",
      content: "Depois da palestra do João, nosso time mudou completamente a postura comercial. As vendas subiram 25% no trimestre seguinte."
    },
    {
      id: 2,
      name: "Ana Carla Ferreira",
      role: "Gerente de Treinamento",
      company: "Inova Varejo",
      content: "Um conteúdo denso, mas entregue com uma leveza e energia impressionantes. Foi o melhor investimento do nosso evento anual."
    },
    {
      id: 3,
      name: "Marcos Paulo",
      role: "CEO",
      company: "Global Logistics",
      content: "João Martins não entrega apenas teoria. Ele entrega o 'como fazer'. Minha equipe saiu do evento pronta para a execução."
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 mb-4">Depoimentos</h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div key={r.id} className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 flex flex-col justify-between reveal" style={{animationDelay: `${idx * 0.2}s`}}>
              <div>
                <MessageSquare className="text-orange-500 mb-6" size={32} />
                <p className="text-zinc-700 text-lg leading-relaxed mb-8 italic">"{r.content}"</p>
              </div>
              <div>
                <p className="font-black text-zinc-950 text-xl">{r.name}</p>
                <p className="text-zinc-500">{r.role} | {r.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 reveal">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
            alt="João Martins no palco" 
            className="rounded-3xl shadow-2xl grayscale"
          />
          <div className="absolute -bottom-8 -right-8 bg-orange-500 text-black font-black p-8 rounded-3xl hidden lg:block reveal delay-2">
            <p className="text-4xl">+15 Anos</p>
            <p className="text-sm uppercase tracking-widest">de experiência real</p>
          </div>
        </div>
      </div>
      <div className="flex-1 reveal delay-1">
        <p className="text-orange-500 font-bold uppercase tracking-widest mb-4">Sobre o Palestrante</p>
        <h2 className="text-4xl md:text-5xl font-black mb-8">João Martins</h2>
        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed mb-10">
          <p>João Martins é palestrante, consultor e treinador de equipes comerciais, com mais de 15 anos de experiência em vendas, liderança e desenvolvimento de times.</p>
          <p>Já treinou mais de 20 mil profissionais em eventos corporativos, convenções e programas internos de empresas de diversos segmentos, do varejo à tecnologia.</p>
          <p>Sua metodologia foca na <span className="text-white font-bold">Execução Real</span>: menos slides motivacionais vazios e muito mais ferramentas práticas que o vendedor pode usar no minuto em que sai da palestra.</p>
        </div>
        <a href="#contato" className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-orange-500 pb-2 hover:text-orange-500 transition-colors">
          👉 Conhecer o palestrante <ChevronRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Sua proposta foi solicitada! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-24 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 p-8 md:p-16 rounded-[3rem] shadow-2xl flex flex-col lg:flex-row gap-16 items-center reveal">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">Não perca tempo.</h2>
            <p className="text-xl text-zinc-400 mb-8">Leve sua equipe para o próximo nível agora. Preencha os dados e receba uma proposta personalizada para seu evento.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-300">
                <CheckCircle2 className="text-orange-500" />
                <span>Palestra customizada para sua dor</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <CheckCircle2 className="text-orange-500" />
                <span>Dinâmicas práticas incluídas</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md reveal delay-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Seu Nome Completo" 
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white focus:outline-none focus:border-orange-500 transition"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Sua Empresa" 
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white focus:outline-none focus:border-orange-500 transition"
                value={formData.empresa}
                onChange={(e) => setFormData({...formData, empresa: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="WhatsApp (ex: 11 99999-9999)" 
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white focus:outline-none focus:border-orange-500 transition"
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Seu Melhor E-mail" 
                required
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white focus:outline-none focus:border-orange-500 transition"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-5 rounded-2xl text-xl transition-all shadow-xl shadow-orange-500/20 active:scale-95 mt-4">
                Solicitar Proposta Agora
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "A palestra é personalizada?",
      answer: "Sim! Antes de cada evento, realizamos uma reunião de briefing para entender os desafios reais da sua equipe e adaptar exemplos e cases."
    },
    {
      question: "Qual a duração média?",
      answer: "As palestras padrão duram entre 90 e 120 minutos. Também oferecemos workshops de meio período ou dia inteiro."
    },
    {
      question: "É presencial ou online?",
      answer: "Ambos. Temos estrutura para eventos presenciais em todo o Brasil e transmissões online de altíssima qualidade."
    },
    {
      question: "Para quais tipos de empresas?",
      answer: "Atendemos desde startups em escala até multinacionais consolidadas. O foco é sempre em times que buscam crescimento e profissionalização comercial."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <h2 className="text-4xl font-black mb-12 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown className={`transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-black tracking-tighter text-white">
        JOÃO<span className="text-orange-500">MARTINS</span>
      </div>
      <div className="text-zinc-500 text-sm text-center">
        © 2024 João Martins Palestras Corporativas. Todos os direitos reservados.
        <br />Desenvolvido com foco em resultados reais.
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-zinc-400 hover:text-white transition">Instagram</a>
        <a href="#" className="text-zinc-400 hover:text-white transition">LinkedIn</a>
        <a href="#" className="text-zinc-400 hover:text-white transition">YouTube</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LectureThemes />
      <Clients />
      <Benefits />
      <VideoSection />
      <PainPoints />
      <Testimonials />
      <About />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
}

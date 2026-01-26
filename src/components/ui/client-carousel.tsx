import { motion } from "framer-motion";
import { Building2, MapPin, ExternalLink } from "lucide-react";
import { Card } from "./card";
import { EnhancedButton } from "./enhanced-button";

interface Client {
  name: string;
  location: string;
  bgColor: string;
  logo?: string;
  logoComponent?: React.ReactNode;
}

interface ClientCarouselProps {
  clients: Client[];
  direction?: "left" | "right";
  speed?: number;
}

export const ClientCarousel = ({ 
  clients, 
  direction = "left", 
  speed = 50 
}: ClientCarouselProps) => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex space-x-6"
        animate={{
          x: direction === "left" ? [`0%`, `-${100}%`] : [`-${100}%`, `0%`],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ width: `${clients.length * 2 * 280}px` }}
      >
        {duplicatedClients.map((client, index) => (
          <motion.div
            key={`${client.name}-${index}`}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-64 h-40 p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center relative overflow-hidden group border border-border rounded-lg">
              {/* Logo as the main element - centered */}
              <motion.div 
                className="relative z-10 flex items-center justify-center w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : client.logoComponent ? (
                  client.logoComponent
                ) : null}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const ClientsCarouselSection = () => {
  // Professional brand logo components
  const IntelLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">INTEL</span>
      </div>
    </div>
  );
  
  const MarvellLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">MARVELL</span>
      </div>
    </div>
  );
  
  const MicronLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-orange-600 to-orange-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">MICRON</span>
      </div>
    </div>
  );
  
  const CadenceLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">CDNS</span>
      </div>
    </div>
  );
  
  const SynopsysLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">SNPS</span>
      </div>
    </div>
  );
  
  const AMDLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">AMD</span>
      </div>
    </div>
  );
  
  const QualcommLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">QCOM</span>
      </div>
    </div>
  );
  
  const CapgeminiLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">CAP</span>
      </div>
    </div>
  );
  
  const HCLLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-blue-700 to-blue-900 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">HCL</span>
      </div>
    </div>
  );
  
  // Additional professional logos
  const ElbrusLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">ELBRUS</span>
      </div>
    </div>
  );
  
  const YQ14Logo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">YQ14</span>
      </div>
    </div>
  );
  
  const TessolveLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-pink-600 to-pink-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">TESS</span>
      </div>
    </div>
  );
  
  // Additional random company logos
  const NvidiaLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">NVDA</span>
      </div>
    </div>
  );
  
  const BroadcomLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">BRCM</span>
      </div>
    </div>
  );
  
  const MediaTekLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">MTK</span>
      </div>
    </div>
  );
  
  const TSMCLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-yellow-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">TSMC</span>
      </div>
    </div>
  );
  
  const SamsungLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-indigo-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">SAMS</span>
      </div>
    </div>
  );
  
  const ARMLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">ARM</span>
      </div>
    </div>
  );
  
  const XilinxLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-teal-600 to-teal-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">XLNX</span>
      </div>
    </div>
  );
  
  const LatticeLogo = () => (
    <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
      <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-cyan-800 rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">LATT</span>
      </div>
    </div>
  );

  const row1Clients: Client[] = [
    { name: "Intel Corporation", location: "Bangalore", bgColor: "bg-gradient-to-br from-primary to-primary-light", logo: "https://lh3.googleusercontent.com/d/1AUdg3ozWHFVQLh8oxrYnEyQyWrDTxHU5" },
    { name: "NVIDIA Corporation", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logo: "https://lh3.googleusercontent.com/d/1AQpi91PuNqq_goOJm7QTolAsGd3DF8BC" },
    { name: "AMD", location: "Bangalore", bgColor: "bg-gradient-to-br from-primary to-primary-light", logoComponent: <AMDLogo /> },
    { name: "Broadcom Inc", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logo: "https://lh3.googleusercontent.com/d/1tMeB29qoZsfWq0dXVv_eLVEU410P-dnX" },
    { name: "MediaTek", location: "Bangalore", bgColor: "bg-gradient-to-br from-primary to-primary-light", logo: "https://lh3.googleusercontent.com/d/17boi_Rovw_5CAqC1SpKecsC5XWoGNOlI" },
    { name: "TSMC", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logoComponent: <TSMCLogo /> },
    { name: "Samsung Electronics", location: "Bangalore", bgColor: "bg-gradient-to-br from-primary to-primary-light", logo: "https://lh3.googleusercontent.com/d/1VgRY5aFbRhEuPAkB-45t3Rv8PAQBjWEm" },
    { name: "ARM Limited", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logoComponent: <ARMLogo /> },
    { name: "Xilinx (AMD)", location: "Bangalore", bgColor: "bg-gradient-to-br from-primary to-primary-light", logoComponent: <XilinxLogo /> },
    { name: "Lattice Semiconductor", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logoComponent: <LatticeLogo /> },
  ];

  const row2Clients: Client[] = [
    { name: "Qualcomm", location: "Bangalore", bgColor: "bg-gradient-to-br from-primary to-primary-light", logo: "https://lh3.googleusercontent.com/d/1S_itXmwrE8gK6MnqlGHyxzi42A8PY4gy" },
    { name: "Cadence Design Systems", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logo: "https://lh3.googleusercontent.com/d/12luCCqbi6Qa7EDuKSrOGQ_3ESAhOX9ZR" },
    { name: "Synopsys Inc", location: "Bangalore", bgColor: "bg-gradient-to-br from-primary to-primary-light", logo: "https://lh3.googleusercontent.com/d/1UuAGYAHowmFAN9mebO4J2u3Hg7WoP1Yt" },
    { name: "Micron Technology", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logo: "https://lh3.googleusercontent.com/d/19Yb86uXsX6-IDFkcDMM0tg8Ck5_9q6L0" },
    { name: "Marvell Technology", location: "Bangalore", bgColor: "bg-gradient-to-br from-primary to-primary-light", logo: "https://lh3.googleusercontent.com/d/13mcNWProMFG6LzMKbwxLn203GrIZGzxQ" },
    { name: "Capgemini Engineering", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logoComponent: <CapgeminiLogo /> },
    { name: "HCL Technologies", location: "Hubli", bgColor: "bg-gradient-to-br from-primary to-primary-light", logoComponent: <HCLLogo /> },
    { name: "Tessolve", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logoComponent: <TessolveLogo /> },
    { name: "Eliocus Labs", location: "Hyderabad", bgColor: "bg-gradient-to-br from-primary to-primary-light", logo: "https://lh3.googleusercontent.com/d/1-peGq6XTcwl0-gm7BscLC5ZD7lg0R3ZS" },
    { name: "YQ14 Tech", location: "Bangalore", bgColor: "bg-gradient-to-br from-accent to-accent-light", logo: "https://lh3.googleusercontent.com/d/1K2oqROgXby1KisUK0ZVLq--9bjqfkaOm" },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Where Do Our Students Work?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our graduates excel at leading semiconductor companies worldwide
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          <div className="relative">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
            <ClientCarousel clients={row1Clients} direction="left" speed={60} />
          </div>
          
          <div className="relative">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
            <ClientCarousel clients={row2Clients} direction="right" speed={55} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarouselSection;
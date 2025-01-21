import React from 'react';
import { Car, Phone, Mail, MapPin, CheckCircle, Ship, DollarSign, Clock, Fuel, Gauge, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Car className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">Global<span className="text-blue-400">Drive</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#services" className="hover:text-blue-400 transition duration-300">Serviços</a>
            <a href="#featured" className="hover:text-blue-400 transition duration-300">Veículos</a>
            <a href="#process" className="hover:text-blue-400 transition duration-300">Processo</a>
            <a href="#about" className="hover:text-blue-400 transition duration-300">Sobre</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contato</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Seu Carro Internacional<br/>
            <span className="text-blue-400">Ao Seu Alcance</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
            Importação inteligente e segura de veículos premium com expertise global
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Solicitar Consultoria
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Oferecemos soluções completas para tornar seu sonho de importação uma realidade</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Ship className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Importação Premium</h3>
              <p className="text-gray-600">Gerenciamento completo do processo de importação, desde a seleção até a entrega final.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <DollarSign className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Consultoria Financeira</h3>
              <p className="text-gray-600">Planejamento financeiro estratégico e auxílio com financiamentos internacionais.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Clock className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Monitoramento 24/7</h3>
              <p className="text-gray-600">Acompanhamento em tempo real do status da sua importação com updates constantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="featured" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Veículos em Destaque</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Conheça alguns dos veículos premium disponíveis para importação</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                name: "Porsche Taycan",
                specs: "Elétrico • 750hp • 2023",
                price: "A partir de R$ 849.900"
              },
              {
                image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                name: "BMW M4 Competition",
                specs: "510hp • V6 • 2023",
                price: "A partir de R$ 899.900"
              },
              {
                image: "https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                name: "Tesla Model S Plaid",
                specs: "Elétrico • 1020hp • 2023",
                price: "A partir de R$ 989.900"
              },
              {
                image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                name: "Audi RS e-tron GT",
                specs: "Elétrico • 646hp • 2023",
                price: "A partir de R$ 949.900"
              },
              {
                image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                name: "Mercedes-AMG GT 63 S",
                specs: "639hp • V8 • 2023",
                price: "A partir de R$ 1.199.900"
              },
              {
                image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                name: "Lamborghini Huracán",
                specs: "640hp • V10 • 2023",
                price: "A partir de R$ 3.199.900"
              }
            ].map((car, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Gauge className="h-4 w-4" />
                    <span className="text-sm">{car.specs}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-500 font-semibold">
                    <DollarSign className="h-4 w-4" />
                    <span>{car.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Processo Simplificado</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Nossa metodologia garante uma importação tranquila e sem complicações</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Consultoria Inicial", desc: "Análise personalizada das suas necessidades" },
              { step: 2, title: "Seleção do Veículo", desc: "Busca e avaliação do veículo ideal" },
              { step: 3, title: "Processo Legal", desc: "Gestão completa da documentação" },
              { step: 4, title: "Entrega Premium", desc: "Liberação e entrega personalizada" }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Por Que Escolher a GlobalDrive?</h2>
              <div className="space-y-4">
                {[
                  "Mais de 2000 importações bem-sucedidas",
                  "Equipe global de especialistas",
                  "Processo 100% transparente e seguro",
                  "Suporte dedicado 24/7"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1619767886558-efdc259b6e09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="GlobalDrive Showroom"
                className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Entre em Contato</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Estamos prontos para ajudar você a realizar o sonho do seu carro internacional</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition duration-300">
                <Phone className="h-6 w-6 text-blue-500" />
                <div>
                  <h3 className="font-bold">Telefone</h3>
                  <p className="text-gray-600">+55 (11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition duration-300">
                <Mail className="h-6 w-6 text-blue-500" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">contato@globaldrive.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition duration-300">
                <MapPin className="h-6 w-6 text-blue-500" />
                <div>
                  <h3 className="font-bold">Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Global<span className="text-blue-400">Drive</span></span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} GlobalDrive. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
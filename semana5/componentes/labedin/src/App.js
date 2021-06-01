import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.6435-9/61567893_2691193187621907_7107138446346420224_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH3A9OQwEKRPinTpxwsUFyjrHz5jcWo6j2sfPmNxajqPXI758phLMaVQRWYmE8rfhykq-Z4EfQDeuQnxPPevPs8&_nc_ohc=Ss8abFUwSWEAX8k9ord&_nc_ht=scontent.fbnu2-1.fna&oh=43dbcae7c004c42838bb65f1ad4f755f&oe=60DBF078" 
          nome="Tiago Prestes" 
          descricao="Oi, eu sou o Tiago. Sou estudando Web Full Stack da Labenu. Sou muito ligado em tecnologia, inovações, design e progamação, sempre procurando informações e conteúdo para me atualizar."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/1782/1782765.png"
          titulo="Email:"
          descricao="tiagoprestes88@gmail.com"
        />
      </div>

      <div>
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/58/58960.png"
          titulo="Endereço:"
          descricao="Rua Amphitheatre Parkway, 1600, Mountain View, CA "
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C510BAQEdgU9j-6hV2Q/company-logo_100_100/0/1519863728684?e=1630540800&v=beta&t=i-4FOK3yywtzyvtXic719Y43hsI6CqtQ11BO75qN2vQ" 
          nome="ABSOFT - Soluções Inteligentes" 
          descricao="Apresentação de software ERP para gestão de empresas. Realizar visitas prospectando clientes por e-mail, leads, telefone e presencial e alimentando o CRM com relatórios gerenciais. Demonstração de software e serviços, acompanhamento de treinamento, análise de público alvo e outras funções pertinentes ao cargo. " 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQEtQfePEjQMoA/company-logo_100_100/0/1603718501325?e=1630540800&v=beta&t=LYGymv5277SesPkBP2_05Af3V-vfefJBWYeQGa7s5lI" 
          nome="Garantioeste-Sociedade De Garantia De Credito Do Oeste Do Paraná" 
          descricao="Orientação de crédito e negócios, vistoria técnica, cobrança, análise de crédito, análise de gestão, prospecção de clientes, gestão de carteira, análise de logística e divulgação. Atendimento Sebrae na sala do empreendedor da Acic." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

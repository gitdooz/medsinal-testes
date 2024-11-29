# Projeto Integrador: MedSinal

### Integrantes do Projeto
- Bruno de Lucas  
- Marcos Vinícius Nunes  
- Maria Júlia Salgado  
- Matheus José Dantas  
- Osmar Menezes


---

## Sobre o Projeto

O **MedSinal** é uma plataforma inovadora voltada para a promoção da saúde sexual, com foco na prevenção e no tratamento de Infecções Sexualmente Transmissíveis (ISTs). Nossa solução oferece funcionalidades práticas e acessíveis, como:

- **Assistente Virtual TACI**: um chatbot interativo para dúvidas relacionadas à saúde sexual.  
- **Localizador de Serviços de Saúde**: um mapa interativo que ajuda os usuários a encontrarem serviços de saúde próximos.  

Nosso objetivo é democratizar o acesso a informações e serviços, promovendo bem-estar e prevenção.

---

## Ferramentas Utilizadas

### **Cadeira de Testes de Software**  
- **Node.js**  
- **Jest** para testes unitários e integrados  
- **JavaScript**  

### **Cadeira de Back-End**  
- **Python**  
- **NumPy** e **Pandas** para manipulação de dados  
- **Flask** para desenvolvimento da aplicação e rotas  

### **Cadeira de Inteligência Artificial**  
- Modelo de IA em construção  

---

## Funcionalidades Testadas

Foram realizados testes na funcionalidade de **mapa interativo**, garantindo que os serviços de saúde sejam localizados com precisão.

---

## Passo a Passo de Implementação

### **1. Testes de Software**
1. Instale o Node.js e o Jest:
   ```bash
   npm install jest
Configure os testes no arquivo package.json:
json
Copy code
"scripts": {
    "test": "jest"
}
2. Crie os arquivos de teste, como mapa.test.js, e implemente os testes unitários e integrados.

---

## Back-End
Instale as bibliotecas necessárias:

bash
Copy code
pip install numpy pandas flask
Configure a estrutura do projeto e crie o arquivo app.py com rotas definidas no Flask:

python
Copy code
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Bem-vindo ao MedSinal!"
Execute a aplicação:

bash
Copy code
python app.py
3. Modelo de Inteligência Artificial
Configure o ambiente Python para IA:
bash
Copy code
pip install tensorflow scikit-learn
Desenvolva o modelo inicial e integre ao projeto utilizando o Flask para comunicação.
Pensou em saúde sexual, pensou em MedSinal!

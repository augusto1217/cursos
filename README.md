# Cursos
### Angular
  - Projetos
    - weather-app
    - stock-control

# Softwares Utilizados
 - [Visua Studio Code](https://code.visualstudio.com/docs/?dv=linux64_deb)
 - Java Virtual Machine
 - [beekeeperstudio](https://docs.beekeeperstudio.io/installation/linux/#deb)

## Instalando Softwares utilizados

#### Install our GPG key
    curl -fsSL https://deb.beekeeperstudio.io/beekeeper.key | sudo gpg --dearmor --output /usr/share/keyrings/beekeeper.gpg \
  && sudo chmod go+r /usr/share/keyrings/beekeeper.gpg \
  && echo "deb [signed-by=/usr/share/keyrings/beekeeper.gpg] https://deb.beekeeperstudio.io stable main" \
  | sudo tee /etc/apt/sources.list.d/beekeeper-studio-app.list > /dev/null

#### Update apt and install
    $ sudo apt update && sudo apt install beekeeper-studio -y

#### Instalar plugins no VsCode

- Angular Extension Pack
- Material Icon Theme
- Extension Pack for Java
- Markdown Preview Enhanced


#### Tutorial para criar ambiente para angular 15

##### Instalar NVM

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    source ~/.bashrc # Or ~/.zshrc, ~/.profile, etc. 	
    nvm --version

##### Instalar Node
    
    nvm install node 18
 	nvm use 18
 	nvm alias default 18

##### Instalar Angular
    npm install -g @angular/cli@15

##### Comandos para validar a instalação do angular

    ng version

##### Comando para criar novo projeto no Angular:
    ng new app-name

##### Para trabalhar com arquivos MD instale o markdown:
    npm install -g markdownlint-cli


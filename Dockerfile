FROM node:latest

# Install necessary dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    ca-certificates \
    default-jre \
    zsh \
    curl \
    wget \
    fonts-powerline \
    procps

# Install global npm packages
RUN npm install -g @nestjs/cli@latest npm@latest 

# Set environment variables
ENV MY_NODE_PACKAGES=/home/node/app/node_modules
ENV NODEPATH=$NODEPATH:/home/node/app
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV PATH=$PATH:/home/node/app/node_modules/.bin

# Switch to non-root user
USER node

# Set working directory
WORKDIR /home/node/app

# Install and configure Zsh
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
    -t https://github.com/romkatv/powerlevel10k \
    -p git \
    -p git-flow \
    -p https://github.com/zdharma-continuum/fast-syntax-highlighting \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -a 'export TERM=xterm-256color'

# Configure Zsh
RUN echo '[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh' >> ~/.zshrc && \
    echo 'HISTFILE=/home/node/zsh/.zsh_history' >> ~/.zshrc

CMD ["tail", "-f", "/dev/null"][user]



# Parallax Developer Docs

Developer documentation built with VuePress, constructed of markdown files

## Contributing

### Install and run locally

You will need VuePress installed globally

```shell
yarn global add vuepress
```

**OR**

```shell
npm install -g vuepress
```

Then to start a local development server run

```shell
yarn dev
```

**OR**

```shell
npm run dev
```

### Install and run via docker

```shell
docker-compose up
```

(Will run on first available port within range 8080-8090). Use `docker-compose ps` to see which port it's running on if not on 8080.

Built with:

- vuepress 0.14.8
- node 8.14.0
- yarn 1.12.3

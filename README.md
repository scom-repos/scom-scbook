## Step 1: Build and run a docker instance
```sh
docker stop components
docker rm components
docker run --name components -it -v C:\projects\components:/app -p 8080:8080 --entrypoint "bash" mcr.microsoft.com/playwright:focal
```

## Step 2: Install packages
```sh
cd /app
npm i
```

## Step 3: Build and bundle library
```sh
npm run build
```

## Step 4: Build demos
```sh
npm run build:test
```

## Step 5: Run demo server
```sh
npm run serve
```

Added new line

Remove new line

Added 
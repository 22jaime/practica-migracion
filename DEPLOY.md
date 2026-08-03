# Guía de Despliegue en VPS (Ubuntu)

Esta guía te ayudará a desplegar tu aplicación Next.js dockerizada en tu VPS.

## Prerrequisitos en el VPS

Asegúrate de tener Docker y Docker Compose instalados. Conéctate a tu VPS por SSH y ejecutaa:

```bash
# Actualizar repositorios
sudo apt update
sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Añadir tu usuario al grupo docker (para no usar sudo con docker)
sudo usermod -aG docker $USER
# (Tendrás que cerrar sesión y volver a entrar para que esto surta efecto)
```

## Paso 1: Transferir Archivos

Necesitas subir los archivos de tu proyecto al VPS. Puedes usar FileZilla o `scp`.
Los archivos/carpetas IMPRESCINDIBLES son:

- `app/`
- `components/`
- `lib/`
- `public/`
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `Dockerfile`
- `.dockerignore`
- `docker-compose.yml`
- `.env.local` (¡IMPORTANTE! No olvides tus variables de entorno)

NO subas:
- `node_modules`
- `.next`
- `.git`

Ejemplo con `scp` (desde tu terminal local):

```bash
scp -r ./* usuario@tu-ip-vps:/ruta/destino/gestoriahol
```

## Paso 2: Desplegar con Docker Compose

Una vez los archivos estén en el VPS, navega a la carpeta y ejecuta:

```bash
cd /ruta/destino/gestoriahol

# Construir y levantar el contenedor en segundo plano
docker compose up -d --build
```

## Paso 3: Verificar

Tu aplicación debería estar corriendo en el puerto 3000.
Prueba acceder a: `http://tu-ip-vps:3000`

## Comandos Útiles

- **Ver logs:**
  ```bash
  docker compose logs -f
  ```
- **Reiniciar:**
  ```bash
  docker compose restart
  ```
- **Detener:**
  ```bash
  docker compose down
  ```
- **Actualizar cambios:**
  Si subes nuevos cambios al código, simplemente corre de nuevo:
  ```bash
  docker compose up -d --build
  ```

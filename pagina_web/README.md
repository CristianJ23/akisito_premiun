# Proyecto Akisito - Sitio Web Premium

Este proyecto consiste en una landing page premium para Akisito, desarrollada con Next.js (Frontend) y Django (Backend).

## Estructura
- `frontend/`: Aplicación Next.js con HeroUI y Tailwind 4.
- `backend/`: API Django con SQLite para gestionar las postulaciones de establecimientos.

## Requisitos
- Node.js 18+
- Python 3.10+

## Cómo ejecutar

### Backend (Django)
1. Navega a `backend/`.
2. Activa el entorno virtual: `.\venv\Scripts\activate` (Windows) o `source venv/bin/activate` (Linux/Mac).
3. Instala dependencias (si no están instaladas): `pip install -r requirements.txt` (Nota: usa `pip install django djangorestframework django-cors-headers` si el archivo no existe).
4. Ejecuta las migraciones: `python manage.py migrate`.
5. Inicia el servidor: `python manage.py runserver`.
   - La API estará disponible en `http://localhost:8000/api/affiliations/`.

### Frontend (Next.js)
1. Navega a `frontend/`.
2. Instala dependencias: `npm install`.
3. Inicia el servidor de desarrollo: `npm run dev`.
   - El sitio estará disponible en `http://localhost:3000`.

## Identidad de Marca
El sitio utiliza la paleta de colores oficial:
- Negro: #0A0A0A
- Dorado: #C9A84C
- Verde: #2C5F2E
- Tipografías: Cormorant Garamond (Títulos) e Inter (Cuerpo).

## Notas
- El video de fondo se encuentra en `frontend/public/video/hero-bg.mp4`.
- Los logos `akisito_dorado.png` y `akisito_chat.png` deben colocarse en `frontend/public/images/` para ser visualizados (se han usado placeholders de texto/SVG por ahora).

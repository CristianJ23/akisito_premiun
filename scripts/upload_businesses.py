import json
import psycopg2
import os
from dotenv import load_dotenv

# Cargar variables de entorno (busca en el backend o en la carpeta actual)
load_dotenv('../pagina_web/backend/.env')
load_dotenv('.env')

def upload_data():
    # Obtener DATABASE_URL
    db_url = os.getenv('DATABASE_URL')
    
    if not db_url:
        print("Error: No se encontró DATABASE_URL. Asegúrate de configurar el archivo .env")
        return

    try:
        # Conectar a la base de datos
        conn = psycopg2.connect(db_url)
        cur = conn.cursor()
        print("Conexión exitosa a Neon PostgreSQL.")

        # Leer el archivo JSON
        with open('businesses.json', 'r', encoding='utf-8') as f:
            businesses = json.load(f)

        # Insertar datos
        # Nota: La tabla suele ser 'affiliations_business' si el app es 'affiliations' y el modelo 'Business'
        table_name = 'affiliations_business'
        
        for b in businesses:
            query = f"""
            INSERT INTO {table_name} (name, business_type, description, address, phone, image_url, is_active, created_at)
            VALUES (%s, %s, %s, %s, %s, %s, %s, NOW())
            """
            cur.execute(query, (
                b['name'],
                b.get('business_type', 'RESTAURANTE'),
                b['description'],
                b['address'],
                b.get('phone', ''),
                b.get('image_url', ''),
                True
            ))
            print(f"Insertado: {b['name']}")

        # Confirmar cambios
        conn.commit()
        print(f"\nSe han subido {len(businesses)} locales correctamente.")

    except Exception as e:
        print(f"Error: {e}")
        if conn:
            conn.rollback()
    finally:
        if cur: cur.close()
        if conn: conn.close()

if __name__ == "__main__":
    upload_data()

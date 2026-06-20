import os
import json
import re

def get_category_from_folder(folder_name):
    folder_name = folder_name.lower()
    if '15' in folder_name: return 'quinceaneras'
    if 'boda' in folder_name: return 'bodas'
    if 'baby' in folder_name: return 'babyshowers'
    if 'deporte' in folder_name: return 'deportes'
    if 'evento' in folder_name or 'fiesta' in folder_name: return 'eventos'
    return 'eventos'

def generate_portfolio_data():
    base_folder = 'Fotos Angelly'
    portfolio_data = []
    
    id_counter = 1
    
    for root, dirs, files in os.walk(base_folder):
        for file in files:
            if file.lower().endswith('.webp') and 'logo' not in file.lower():
                folder_name = os.path.basename(root)
                if folder_name == base_folder:
                    continue # Skip root files if any
                
                category = get_category_from_folder(folder_name)
                # Convert backslashes to forward slashes for web
                rel_path = os.path.join(root, file).replace('\\', '/')
                rel_path = f"./{rel_path}"
                
                title_mapped = {
                    'quinceaneras': '15 Años',
                    'bodas': 'Bodas',
                    'babyshowers': 'Baby Showers',
                    'eventos': 'Eventos',
                    'deportes': 'Deportes'
                }
                
                item = {
                    "id": id_counter,
                    "category": category,
                    "title": f"Angelly Parra - {title_mapped[category]}",
                    "subtitle": "Fotografía Profesional",
                    "image": rel_path,
                    "wide": (id_counter % 3 == 0), # Pseudo-random wide formatting
                    "metadata": {
                        "camera": title_mapped[category],
                        "settings": "Iluminación Profesional",
                        "concept": "Capturando momentos únicos y energía genuina."
                    }
                }
                portfolio_data.append(item)
                id_counter += 1
                
    return portfolio_data

def update_app_js(data):
    js_file = 'app.js'
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find portfolioData block
    pattern = r"const portfolioData = \[\s*\{.*?\}\s*\];"
    
    # We'll build the js array string
    data_str = "const portfolioData = " + json.dumps(data, indent=4, ensure_ascii=False) + ";"
    
    new_content = re.sub(pattern, data_str, content, flags=re.DOTALL)
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"app.js updated successfully with {len(data)} items.")

if __name__ == "__main__":
    data = generate_portfolio_data()
    update_app_js(data)

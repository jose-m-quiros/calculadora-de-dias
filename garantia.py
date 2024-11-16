from datetime import datetime

def calculate_days():
    print("Calculadora de días transcurridos")
    print("Formato de fecha: DD/MM/YYYY")
    
    while True:
        try:
            fecha_input = input("Ingrese la fecha inicial (DD/MM/YYYY): ")
            fecha_inicial = datetime.strptime(fecha_input, "%d/%m/%Y")
            break
        except ValueError:
            print("Error: Por favor ingrese la fecha en el formato correcto (DD/MM/YYYY)")
    
    fecha_actual = datetime.now()
    diferencia = fecha_actual - fecha_inicial
    dias = diferencia.days
    
    print(f"\nFecha ingresada: {fecha_inicial.strftime('%d/%m/%Y')}")
    print(f"Fecha actual: {fecha_actual.strftime('%d/%m/%Y')}")
    print(f"Han transcurrido {dias} días")

if __name__ == "__main__":
    calculate_days()
    
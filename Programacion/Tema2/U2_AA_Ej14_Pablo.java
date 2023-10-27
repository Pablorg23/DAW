import java.util.Scanner;
public class U2_AA_Ej14_Pablo {
        public static void main(String[] args) {
            Scanner teclado = new Scanner(System.in);
    
            // Solicitar al usuario un número entre 1 y 99
            System.out.print("Introduce un número entre 1 y 99: ");
            int numero = teclado.nextInt();
    
            // Comprobar si el número está dentro del rango permitido
            if (numero >= 1 && numero <= 99) {
                // Arrays de palabras para los números del 1 al 19 y decenas
                String[] unidades = {"", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"};
                String[] decenas = {"", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"};
    
                // Si el número es menor que 20, usamos el array de unidades
                if (numero < 20) {
                    System.out.println(unidades[numero]);
                } else {
                    // Dividimos el número en decenas y unidades
                    int decena = numero / 10;
                    int unidad = numero % 10;
    
                    // Construimos la representación en palabras
                    String numeroEnPalabras = decenas[decena];
                    if (unidad > 0) {
                        numeroEnPalabras += " y " + unidades[unidad];
                    }
    
                    System.out.println(numeroEnPalabras);
                }
            } else {
                System.out.println("El número no está dentro del rango permitido.");
            }
    
        }
    }
    
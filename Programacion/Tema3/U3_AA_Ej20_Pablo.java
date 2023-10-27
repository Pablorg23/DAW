import java.util.Scanner;
public class U3_AA_Ej20_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        double sumaTotal = 0.0;
        double cantidad;

        // Solicitar las cantidades de dinero hasta que se ingrese 0
        while (true) {
            System.out.print("Ingrese una cantidad de dinero (0 para finalizar): ");
            cantidad = teclado.nextDouble();

            if (cantidad == 0) {
                break;  // Salir del bucle si se ingresa 0
            }

            sumaTotal += cantidad;
        }

        teclado.close(); // Cerrar el Scanner

        // Mostrar la suma total de dinero
        System.out.println("La suma total de dinero es: " + sumaTotal);
    }
}

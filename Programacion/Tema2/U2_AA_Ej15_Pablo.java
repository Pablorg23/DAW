import java.util.Scanner;
public class U2_AA_Ej15_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        // Solicitar al usuario la base del triángulo
        System.out.print("Introduce la base del triángulo: ");
        double base = teclado.nextDouble();

        // Solicitar al usuario la altura del triángulo
        System.out.print("Introduce la altura del triángulo: ");
        double altura = teclado.nextDouble();

        // Comprobar que los números no son negativos
        if (base >= 0 && altura >= 0) {
            // Calcular el área del triángulo
            double area = (base * altura) / 2;

            // Mostrar el área del triángulo
            System.out.println("El área del triángulo es: " + area);
        } else {
            System.out.println("Los números introducidos no pueden ser negativos.");
        }


    }
}

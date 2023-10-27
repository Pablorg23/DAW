import java.util.Scanner;

public class U2_AA_Ej19_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Introduce un ángulo en grados: ");
        double grados = teclado.nextDouble();

        // Asegurémonos de que el ángulo esté en el rango 0-360 grados.
        grados = grados % 360.0;
        if (grados < 0) {
            grados += 360.0;
        }

        // Realizamos la conversión a radianes (pi radianes equivalen a 180 grados).
        double radianes = grados * Math.PI / 180.0;

        System.out.println("El ángulo " + grados + " grados es equivalente a " + radianes + " radianes.");

    }
}

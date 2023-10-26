import java.util.Scanner;

public class U3_AA_Ej15_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Ingrese el número de filas para el Triángulo de Pascal: ");
        int n = teclado.nextInt();

        for (int i = 0; i < n; i++) {
            int coeficiente = 1;
            for (int j = 0; j < n - i; j++) {
                System.out.print("   "); // Espacios para alinear los números
            }
            for (int j = 0; j <= i; j++) {
                System.out.printf("%6d", coeficiente);
                coeficiente = coeficiente * (i - j) / (j + 1);
            }
            System.out.println();
        }

        teclado.close();
    }
}

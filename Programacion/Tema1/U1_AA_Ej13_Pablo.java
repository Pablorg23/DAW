import java.util.Scanner;

public class U1_AA_Ej13_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Ingrese el número n:");
        int n = teclado.nextInt();

        System.out.println("Ingrese el número m:");
        int m = teclado.nextInt();

        int diferencia = m - (n % m);

        System.out.println("A " + n + " hay que sumarle " + diferencia + " para que sea múltiplo de " + m + ".");

       
    }
}

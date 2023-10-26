 import java.util.*;

public class U1_AA_Ej21_Pablo {
 
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        double a,b;
        boolean sonIguales;

        System.out.print("Introduce el primer número (a): ");
        a = teclado.nextDouble();

        System.out.print("Introduce el segundo número (b): ");
        b = teclado.nextDouble();

        sonIguales = (a == b);

        System.out.println("¿Son iguales? " + sonIguales);

        teclado.close();

    }
}

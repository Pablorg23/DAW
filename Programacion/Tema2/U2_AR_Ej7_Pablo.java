import java.util.*;
public class U2_AR_Ej7_Pablo{
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        double numero;

        System.out.print("Introduce un número decimal: ");
        numero = teclado.nextDouble();

        if (Math.abs(numero) < 1) {
            System.out.println("El número es casi 0.");
        } else {
            System.out.println("El número no es casi 0.");
        }

    }
}

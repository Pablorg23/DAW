import java.util.Scanner;

public class T1_ejercicioFinales14_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Ingrese la base del triángulo:");
        double base = teclado.nextDouble();

        System.out.println("Ingrese la altura del triángulo:");
        double altura = teclado.nextDouble();

        double area = (base * altura) / 2;

        System.out.println("El área del triángulo es: " + area);

    }
}

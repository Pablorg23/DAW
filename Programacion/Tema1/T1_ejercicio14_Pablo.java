import java.util.Scanner;

public class T1_ejercicio14_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Ingresa un número decimal:");
        double numeroDecimal = teclado.nextDouble();

        long numeroRedondeado = Math.round(numeroDecimal);

        System.out.println("El número redondeado al entero más cercano es: " + numeroRedondeado);

       
    }
}

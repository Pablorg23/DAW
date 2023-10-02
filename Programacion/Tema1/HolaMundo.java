import java.util.Scanner;

public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");

        Scanner teclado = new Scanner(System.in);

        try {
            System.out.print("Ingresa un valor entero: ");
            int entero = teclado.nextInt();

            System.out.print("Ingresa un valor double (Para introducir decimales usa la coma): ");
            double valorConDecimales = teclado.nextDouble();

            System.out.print("Ingresa un valor float: ");
            float valorConDecimales2 = teclado.nextFloat();

            System.out.print("Ingresa un valor short: ");
            short enteroCorto = teclado.nextShort();

            System.out.print("Ingresa un valor long: ");
            long enteroLargo = teclado.nextLong();

            System.out.print("Ingresa un valor boolean (true o false): ");
            boolean booleano = teclado.nextBoolean();

            System.out.print("Ingresa un valor byte: ");
            byte enteroMuyCorto = teclado.nextByte();

            System.out.print("Ingresa un valor char: ");
            char caracter = teclado.next().charAt(0);


            //pongo los nombres de la variables en mayuscula por estetica aunque al ser variables primitivas deberian ser minusculas.
            System.out.println("Valores ingresados:");
            System.out.println("Entero: " + entero);
            System.out.println("Double: " + valorConDecimales);
            System.out.println("Float: " + valorConDecimales2);
            System.out.println("Short: " + enteroCorto);
            System.out.println("Long: " + enteroLargo);
            System.out.println("Boolean: " + booleano);
            System.out.println("Byte: " + enteroMuyCorto);
            System.out.println("Char: " + caracter);

        } catch (Exception e) {
            System.out.println("Ha ocurrido un error al ingresar los valores.");
        } finally {
            teclado.close();
        }
    }
}

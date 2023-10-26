import java.util.Scanner;

public class U2_AA_Ej11_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        System.out.print("Introduce un número entre 0 y 9999: ");
        int numero = teclado.nextInt();
        
        if (esCapicua(numero)) {
            System.out.println("El número " + numero + " es capicúa.");
        } else {
            System.out.println("El número " + numero + " no es capicúa.");
        }
        
    }
    
    // Función para verificar si un número es capicúa
    public static boolean esCapicua(int num) {
        int numeroOriginal = num;
        int numeroInvertido = 0;
        
        while (num > 0) {
            int digito = num % 10;
            numeroInvertido = numeroInvertido * 10 + digito;
            num /= 10;
        }
        
        return numeroOriginal == numeroInvertido;
    }
}

import java.util.Scanner;

public class U3_AA_Ej17_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.print("Ingresa el primer número: ");
        int a = teclado.nextInt();
        
        System.out.print("Ingresa el segundo número: ");
        int b = teclado.nextInt();

        int maximoComunDivisor = calcularMCD(a, b);
        System.out.println("El máximo común divisor de " + a + " y " + b + " es " + maximoComunDivisor);
    }

    public static int calcularMCD(int a, int b) {
        int mcd = 1;
        int menor = Math.min(a, b);

        for (int i = menor; i >= 1; i--) {
            if (a % i == 0 && b % i == 0) {
                mcd = i;
                break;
            }
        }

        return mcd;
    }
}

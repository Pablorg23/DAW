import java.util.Scanner;

public class U1_AA_Ej12_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Ingrese un número entero:");
        int numero = teclado.nextInt();

    
        int diferencia = 7 - (numero % 7);

        if(numero%7==0){
        
        System.out.println("A "+numero+" no tienes que sumarle nada para que sea multiplo de 7.");
    
        }else{

        System.out.println("A " + numero + " hay que sumarle " + diferencia + " para que sea múltiplo de 7.");
        }
        teclado.close();

    }
}

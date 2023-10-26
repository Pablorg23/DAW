import java.util.*;
public class U3_AA_Ej11_Pablo {
    
    public static void main(String[] args) {
        
        Scanner teclado =new Scanner(System.in);

        int numero=0;
        int numeroBinario=0;
        int aux=0;

        System.out.println("Introduce un numero y lo paso a binario(leerlo al reves)");
            numero=teclado.nextInt();
        do {
    

        aux=numero/2;
        numeroBinario=numero%2;


            System.out.println(numeroBinario);

            numero=aux;

        } while (aux>0);
    }
}

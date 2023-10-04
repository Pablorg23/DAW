
import java.util.*;
public class U1_AR_Ej3_Pablo {

    public static void main(String[] args) {
        
        Scanner teclado = new Scanner(System.in);

       

        System.out.println("Introduce tu edad");
        byte edad=teclado.nextByte();

        edad++;

        System.out.println("La edad que tendras el año que viene es de "+edad);

    }
}
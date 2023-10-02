
import java.util.*;
public class T1_ejercicio3 {

    public static void main(String[] args) {
        
        Scanner teclado = new Scanner(System.in);

       

        System.out.println("Introduce tu edad");
        byte edad=teclado.nextByte();

        edad++;

        System.out.println("La edad que tendras el año que viene es de "+edad);

    }
}
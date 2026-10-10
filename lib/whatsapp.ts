import { CartItemDetailed, CheckoutDetails } from '@/types';
import { formatRupiah } from './currency';

export const DEFAULT_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';

/**
 * Format orders into standardized WhatsApp message based on PRD spec FR-08.
 */
export function createWhatsAppMessage(
  details: CheckoutDetails,
  items: CartItemDetailed[],
  total: number
): string {
  const customerName = details.customerName.trim();
  const customerNote = details.customerNote?.trim() || '-';

  const orderLines = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name} x${item.quantity} — ${formatRupiah(item.subtotal)}`
    )
    .join('\n');

  return (
    `Halo Sabhulan, saya ingin memesan:\n\n` +
    `Nama: ${customerName}\n\n` +
    `Pesanan:\n${orderLines}\n\n` +
    `Total Produk: ${formatRupiah(total)}\n` +
    `Catatan: ${customerNote}\n\n` +
    `Mohon konfirmasi ketersediaan dan total akhir. Terima kasih!`
  );
}

/**
 * Generate full wa.me link with encoded message.
 */
export function buildWhatsAppUrl(
  message: string,
  phoneNumber: string = DEFAULT_WHATSAPP_NUMBER
): string {
  // Clean phone number: remove any non-digit chars, ensure international format (e.g. 62)
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

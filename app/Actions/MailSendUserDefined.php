<?php
namespace App\Actions;

use App\Mail\UserDefinedMailable;
use Illuminate\Support\Facades\Mail;
use InvalidArgumentException;

class MailSendUserDefined
{
    public function handle(
        $to,
        string $subject,
        string $body,
        ?array $attachments = null,
        ?array $ccAddresses = null,
        ?array $bccAddresses = null,
        ?array $from = null,
    ) {
        $ccAddresses = $ccAddresses ?? [];
        $attachements = $attachements ?? [];

        $mailable = new UserDefinedMailable(body: $body);
        $mailable->subject($subject);

        if (count($ccAddresses) > 0) {
            foreach ($ccAddresses as $cc) {
                $mailable->cc($cc);
            }
        }

        if (count($bccAddresses) > 0) {
            foreach ($ccAddresses as $cc) {
                $mailable->cc($cc);
            }
        }

        if (count($attachments) > 0) {
            foreach ($attachments as $attachment) {
                $mailable->attach($attachment->getPath(), [
                    'as' => $attachment->getOriginalName(),
                ]);
            }
        }

        $mailable = $this->setRecipients($to, $mailable);


        Mail::send($mailable);
    }

    private function setRecipients($to, $mailable)
    {
        if (is_string($to)) {
            return $mailable->to($to);
        }

        if (count($to) == 0) {
            throw new InvalidArgumentException('Expected at least 1 element in to, 0 given.');
        }

        foreach ($to as $recipient) {
            $mailable->to($recipient);
        }
        return $mailable;
    }
}

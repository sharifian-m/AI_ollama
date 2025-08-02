import { Component } from '@angular/core';
import {AiServiceService} from '../../ai-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gpt-command',
  templateUrl: './gpt-command.component.html',
  styleUrls: ['./gpt-command.component.scss'],
  standalone:false,
})
export class GptCommandComponent {

  userText = '';
  interpretedCommand = '';

  constructor(private aiServiceService: AiServiceService, private router: Router) {}

  sendCommand() {
      this.aiServiceService.interpret(this.userText).subscribe(res => {
        const parsed = JSON.parse(res.command);
        if (parsed.action === 'navigate' && parsed.target === 'voucher') {
          this.router.navigate(['/voucher']);
        } else {
          alert('دستور ناشناخته');
        }
      });
    }

}

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
  interpretedCommand:any ;

  constructor(private aiServiceService: AiServiceService, private router: Router) {}

  sendCommand() {
      this.aiServiceService.interpret(this.userText).subscribe(res => {
        const cleaned = res.command.replace(/```json\n?/, '').replace(/```$/, '');
        this.interpretedCommand = JSON.parse(cleaned);
        console.log('this.interpretedCommand',this.interpretedCommand)
        console.log('this.interpretedCommand.action.includes(\'navigate\')',this.interpretedCommand.action.includes('navigate'))
        console.log('this.interpretedCommand.target=== \'voucher\'',this.interpretedCommand.target==='voucher')
        if (this.interpretedCommand.action.includes('navigate') && this.interpretedCommand.target ==='voucher') {
          this.router.navigate(['voucher']);
        } else {
          alert('دستور ناشناخته');
        }
      });
    }

}

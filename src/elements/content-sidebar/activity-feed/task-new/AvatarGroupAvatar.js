// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import camelCase from 'lodash/camelCase';
import IconComplete from '../../../../icons/general/IconVerified';
import IconReject from '../../../../icons/general/IconRejected';
import Avatar from '../Avatar';
import { TASK_NEW_APPROVED, TASK_NEW_REJECTED, TASK_NEW_COMPLETED, TASK_NEW_NOT_STARTED } from '../../../../constants';
import messages from '../../../common/messages';

type Props = {
    className?: string,
    getAvatarUrl?: GetAvatarUrlCallback,
    status: TaskCollabStatus,
    user: UserMini,
};

const StatusIcon = ({ status, ...rest }: { status: TaskCollabStatus }) => {
    switch (status) {
        case TASK_NEW_APPROVED:
        case TASK_NEW_COMPLETED:
            return <IconComplete {...rest} />;
        case TASK_NEW_REJECTED:
            return <IconReject {...rest} />;
        case TASK_NEW_NOT_STARTED:
        default:
            return null;
    }
};

const AvatarGroupAvatar = React.memo<Props>(({ user, status, getAvatarUrl, className, ...rest }: Props) => (
    <div
        className={classNames('bcs-AvatarGroup-avatarContainer', className)}
        data-testid="avatar-group-avatar-container"
        {...rest}
    >
        <Avatar className="bcs-AvatarGroup-avatar" user={user} getAvatarUrl={getAvatarUrl} />
        <StatusIcon
            status={status}
            className={`bcs-AvatarGroup-statusIcon ${camelCase(status)}`}
            height={12}
            width={12}
            title={<FormattedMessage {...messages.completedAssignment} />}
        />
    </div>
));

export default AvatarGroupAvatar;
